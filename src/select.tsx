import {
  type FieldPath,
  type FieldValues,
  useController,
  type UseControllerProps,
  useFormContext,
} from 'react-hook-form';
import Select, { type SelectProps } from '@cloudscape-design/components/select';
import { RefAttributes } from 'react';

import useMergeRefs from './utilities/use-merge-refs';

export default function RhfSelect<T extends FieldValues, TName extends FieldPath<T>>({
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
    <Select
      {...props}
      ref={mergedRef}
      selectedOption={field.value ?? null}
      onBlur={(e) => {
        field.onBlur();
        trigger(name);
        onBlur?.(e);
      }}
      onChange={(e) => {
        field.onChange(e.detail.selectedOption);
        if (fieldState.isTouched) {
          trigger(name);
        }
        onChange?.(e);
      }}
    />
  );
}

interface Props<T extends FieldValues, TName extends FieldPath<T>>
  extends Omit<SelectProps, 'selectedOption' | 'name'>,
    RefAttributes<SelectProps.Ref>,
    Omit<UseControllerProps<T, TName>, 'control'> {}
