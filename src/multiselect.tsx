import {
  type FieldPath,
  type FieldValues,
  useController,
  type UseControllerProps,
  useFormContext,
} from 'react-hook-form';
import Multiselect, { type MultiselectProps } from '@cloudscape-design/components/multiselect';

export default function RhfMultiselect<T extends FieldValues, TName extends FieldPath<T>>({
  name,
  onBlur,
  onChange,
  rules,
  ...props
}: Props<T, TName>) {
  const { control, trigger } = useFormContext<T, TName>();
  const { field, fieldState } = useController({ name, rules, control });

  return (
    <Multiselect
      {...props}
      ref={field.ref}
      selectedOptions={field.value ?? []}
      onBlur={(e) => {
        field.onBlur();
        trigger(name);
        onBlur?.(e);
      }}
      onChange={(e) => {
        field.onChange(e.detail.selectedOptions);
        if (fieldState.isTouched) {
          trigger(name);
        }
        onChange?.(e);
      }}
    />
  );
}

interface Props<T extends FieldValues, TName extends FieldPath<T>>
  extends Omit<MultiselectProps, 'selectedOptions' | 'name'>,
    Omit<UseControllerProps<T, TName>, 'control'> {}
