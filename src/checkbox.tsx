import {
  type FieldPath,
  type FieldValues,
  useController,
  type UseControllerProps,
  useFormContext,
} from 'react-hook-form';
import Checkbox, { type CheckboxProps } from '@cloudscape-design/components/checkbox';

export default function RhfCheckbox<T extends FieldValues, TName extends FieldPath<T>>({
  name,
  onBlur,
  onChange,
  rules,
  ...props
}: Props<T, TName>) {
  const { control, trigger } = useFormContext<T, TName>();
  const { field, fieldState } = useController({ name, rules, control });

  return (
    <Checkbox
      {...props}
      ref={field.ref}
      checked={field.value ?? false}
      onBlur={(e) => {
        field.onBlur();
        trigger(name);
        onBlur?.(e);
      }}
      onChange={(e) => {
        field.onChange(e.detail.checked);
        if (fieldState.isTouched) {
          trigger(name);
        }
        onChange?.(e);
      }}
    />
  );
}

interface Props<T extends FieldValues, TName extends FieldPath<T>>
  extends Omit<CheckboxProps, 'checked' | 'name'>,
    Omit<UseControllerProps<T, TName>, 'control'> {}
