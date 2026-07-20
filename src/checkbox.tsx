import {
  type FieldPath,
  type FieldValues,
  useController,
  type UseControllerProps,
  useFormContext,
} from 'react-hook-form';
import Checkbox, { type CheckboxProps } from '@cloudscape-design/components/checkbox';
import { RefAttributes } from 'react';

import useMergeRefs from './utilities/use-merge-refs';

export default function RhfCheckbox<T extends FieldValues, TName extends FieldPath<T>>({
  name,
  onBlur,
  onChange,
  ref,
  rules,
  ...props
}: Props<T, TName>) {
  const { control, trigger } = useFormContext<T, TName>();
  const { field, fieldState } = useController({ name, rules, control });
  const mergedRef = useMergeRefs(ref, field.ref);

  return (
    <Checkbox
      {...props}
      ref={mergedRef}
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
    RefAttributes<CheckboxProps.Ref>,
    Omit<UseControllerProps<T, TName>, 'control'> {}
