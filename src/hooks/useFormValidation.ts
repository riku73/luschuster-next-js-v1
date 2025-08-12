import { useState, useCallback } from 'react'
import { z } from 'zod'

interface FormField {
  value: string | boolean | string[]
  error?: string
  touched: boolean
}

interface UseFormValidationProps<T extends z.ZodType> {
  schema: T
  initialValues: z.infer<T>
}

export function useFormValidation<T extends z.ZodType>({
  schema,
  initialValues
}: UseFormValidationProps<T>) {
  const [fields, setFields] = useState<Record<string, FormField>>(() => {
    const initial: Record<string, FormField> = {}
    Object.keys(initialValues as Record<string, any>).forEach(key => {
      initial[key] = {
        value: (initialValues as Record<string, any>)[key],
        touched: false
      }
    })
    return initial
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const validateField = useCallback((name: string, value: any) => {
    try {
      // For individual field validation, we'll create a partial validation
      const testData: any = { [name]: value }
      schema.parse(testData)
      return undefined
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldError = error.issues.find(issue => issue.path.includes(name))
        return fieldError?.message || 'Valeur invalide'
      }
    }
    return undefined
  }, [schema])

  const updateField = useCallback((name: string, value: any) => {
    setFields(prev => {
      const error = validateField(name, value)
      return {
        ...prev,
        [name]: {
          value,
          error,
          touched: true
        }
      }
    })
  }, [validateField])

  const validateAllFields = useCallback(() => {
    const values: any = {}
    const newFields = { ...fields }
    let hasErrors = false

    Object.keys(fields).forEach(key => {
      values[key] = fields[key].value
      const error = validateField(key, fields[key].value)
      newFields[key] = {
        ...newFields[key],
        error,
        touched: true
      }
      if (error) hasErrors = true
    })

    setFields(newFields)

    try {
      schema.parse(values)
      return { isValid: true, values }
    } catch (error) {
      return { isValid: false, values, error }
    }
  }, [fields, schema, validateField])

  const getFieldProps = useCallback((name: string) => ({
    value: typeof fields[name]?.value === 'string' ? fields[name].value : '',
    error: fields[name]?.error,
    touched: fields[name]?.touched,
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      updateField(name, e.target.value)
    },
    onBlur: () => {
      if (!fields[name]?.touched) {
        setFields(prev => ({
          ...prev,
          [name]: {
            ...prev[name],
            touched: true
          }
        }))
      }
    }
  }), [fields, updateField])

  const getCheckboxProps = useCallback((name: string, itemValue?: string) => ({
    checked: itemValue 
      ? Array.isArray(fields[name]?.value) && (fields[name].value as string[]).includes(itemValue)
      : Boolean(fields[name]?.value),
    error: fields[name]?.error,
    touched: fields[name]?.touched,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
      if (itemValue) {
        // Array checkbox (multiple selection)
        const currentArray = (fields[name]?.value as string[]) || []
        const newArray = e.target.checked
          ? [...currentArray, itemValue]
          : currentArray.filter(v => v !== itemValue)
        updateField(name, newArray)
      } else {
        // Single checkbox
        updateField(name, e.target.checked)
      }
    }
  }), [fields, updateField])

  const reset = useCallback(() => {
    const resetFields: Record<string, FormField> = {}
    Object.keys(initialValues as Record<string, any>).forEach(key => {
      resetFields[key] = {
        value: (initialValues as Record<string, any>)[key],
        touched: false
      }
    })
    setFields(resetFields)
    setIsSubmitting(false)
  }, [initialValues])

  const hasErrors = Object.values(fields).some(field => field.error && field.touched)
  const allTouched = Object.values(fields).every(field => field.touched)

  return {
    fields,
    getFieldProps,
    getCheckboxProps,
    updateField,
    validateAllFields,
    reset,
    isSubmitting,
    setIsSubmitting,
    hasErrors,
    allTouched
  }
}