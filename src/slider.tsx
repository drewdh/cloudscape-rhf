import {
  type FieldPath,
  type FieldValues,
  useController,
  type UseControllerProps,
  useFormContext,
} from 'react-hook-form';
import Slider, { type SliderProps } from '@cloudscape-design/components/slider';

export default function RhfSlider<T extends FieldValues, TName extends FieldPath<T>>({
  name,
  onChange,
  rules,
  ...props
}: Props<T, TName>) {
  const { control, trigger } = useFormContext<T, TName>();
  const { field, fieldState } = useController({ name, rules, control });

  return (
    <Slider
      {...props}
      value={field.value}
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
  extends Omit<SliderProps, 'value' | 'name'>,
    Omit<UseControllerProps<T, TName>, 'control'> {}
