import {
  type FieldPath,
  type FieldValues,
  useController,
  type UseControllerProps,
  useFormContext,
} from 'react-hook-form';
import FormField, { type FormFieldProps } from '@cloudscape-design/components/form-field';

export default function RhfFormField<T extends FieldValues, TName extends FieldPath<T>>({
  name,
  ...props
}: Props<T, TName>) {
  const { control } = useFormContext();
  const { fieldState } = useController({ control, name });

  return <FormField {...props} errorText={fieldState.error?.message} />;
}

interface Props<T extends FieldValues, TName extends FieldPath<T>>
  extends Omit<FormFieldProps, 'errorText'>,
    UseControllerProps<T, TName> {}
