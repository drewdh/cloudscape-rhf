import {
  type FieldPath,
  type FieldValues,
  useController,
  type UseControllerProps,
  useFormContext,
} from 'react-hook-form';
import TimeInput, { type TimeInputProps } from '@cloudscape-design/components/time-input';
import { RefAttributes } from 'react';

import useMergeRefs from './utilities/use-merge-refs';

export default function RhfTimeInput<T extends FieldValues, TName extends FieldPath<T>>({
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
    <TimeInput
      {...props}
      ref={mergedRef}
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
    RefAttributes<TimeInputProps.Ref>,
    Omit<UseControllerProps<T, TName>, 'control'> {}
