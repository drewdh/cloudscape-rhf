/**
 * Shared helpers for cloudscape-rhf Storybook stories.
 *
 * All RHF components require a FormProvider ancestor. Use `FormWrapper` to
 * provide one, and `ErrorFormWrapper` for stories that need pre-set field errors.
 */
import React, { useEffect } from 'react';
import { FormProvider, useForm, type DefaultValues, type FieldValues } from 'react-hook-form';

interface FormWrapperProps<T extends FieldValues> {
  defaultValues?: DefaultValues<T>;
  children: React.ReactNode;
}

export function FormWrapper<T extends FieldValues>({ defaultValues, children }: FormWrapperProps<T>) {
  const methods = useForm<T>({ defaultValues });
  return <FormProvider {...methods}>{children}</FormProvider>;
}

interface ErrorFormWrapperProps<T extends FieldValues> extends FormWrapperProps<T> {
  errors: Partial<Record<keyof T, string>>;
}

export function ErrorFormWrapper<T extends FieldValues>({
  defaultValues,
  errors,
  children,
}: ErrorFormWrapperProps<T>) {
  const methods = useForm<T>({ defaultValues });

  useEffect(() => {
    for (const [field, message] of Object.entries(errors)) {
      methods.setError(field as any, { type: 'manual', message: message as string });
    }
  }, []);

  return <FormProvider {...methods}>{children}</FormProvider>;
}
