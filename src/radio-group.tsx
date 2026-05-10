import {
  type FieldPath,
  type FieldValues,
  useController,
  type UseControllerProps,
  useFormContext,
} from 'react-hook-form';
import RadioGroup, { RadioGroupProps } from '@cloudscape-design/components/radio-group';

export default function RhfRadioGroup<T extends FieldValues, TName extends FieldPath<T>>({
  name,
  onChange,
  rules,
  ...props
}: Props<T, TName>) {
  const { control, trigger } = useFormContext<T, TName>();
  const { field, fieldState } = useController({ name, rules, control });

  return (
    <RadioGroup
      {...props}
      ref={field.ref}
      value={field.value}
      onChange={async (e) => {
        field.onChange(e.detail.value);
        if (fieldState.isTouched) {
          trigger();
        }
        onChange?.(e);
      }}
    />
  );
}

interface Props<T extends FieldValues, TName extends FieldPath<T>>
  extends Omit<RadioGroupProps, 'value' | 'name'>,
    Omit<UseControllerProps<T, TName>, 'control'> {}
