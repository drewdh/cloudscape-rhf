import {
  type FieldPath,
  type FieldValues,
  useController,
  type UseControllerProps,
  useFormContext,
} from 'react-hook-form';
import Autosuggest, { type AutosuggestProps } from '@cloudscape-design/components/autosuggest';

export default function RhfAutosuggest<T extends FieldValues, TName extends FieldPath<T>>({
  name,
  onBlur,
  onChange,
  rules,
  ...props
}: Props<T, TName>) {
  const { control, trigger } = useFormContext<T, TName>();
  const { field, fieldState } = useController({ name, rules, control });

  return (
    <Autosuggest
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
  extends Omit<AutosuggestProps, 'value' | 'name'>,
    Omit<UseControllerProps<T, TName>, 'control'> {}
