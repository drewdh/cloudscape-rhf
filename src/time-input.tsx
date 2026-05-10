import {
  type FieldPath,
  type FieldValues,
  useController,
  type UseControllerProps,
  useFormContext,
} from 'react-hook-form';
import TimeInput, { type TimeInputProps } from '@cloudscape-design/components/time-input';

export default function RhfTimeInput<T extends FieldValues, TName extends FieldPath<T>>({
  name,
  onBlur,
  onChange,
  rules,
  ...props
}: Props<T, TName>) {
  const { control, trigger } = useFormContext<T, TName>();
  const { field, fieldState } = useController({ name, rules, control });

  return (
    <TimeInput
      {...props}
      ref={field.ref}
      value={field.value ?? ''}
      onBlur={(e) => {
        field.onBlur();
        trigger(name);
        onBlur?.(e);
      }}
      onChange={(e) => {
        field.onChange(e.detail.value);
        if (fieldState.isTouched) {
          trigger(name);
        }
        onChange?.(e);
      }}
    />
  );
}

interface Props<T extends FieldValues, TName extends FieldPath<T>>
  extends Omit<TimeInputProps, 'value' | 'name'>,
    Omit<UseControllerProps<T, TName>, 'control'> {}
