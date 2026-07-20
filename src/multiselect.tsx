import {
  type FieldPath,
  type FieldValues,
  useController,
  type UseControllerProps,
  useFormContext,
} from 'react-hook-form';
import Multiselect, { type MultiselectProps } from '@cloudscape-design/components/multiselect';
import { RefAttributes } from 'react';

import useMergeRefs from './utilities/use-merge-refs';

export default function RhfMultiselect<T extends FieldValues, TName extends FieldPath<T>>({
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
    <Multiselect
      {...props}
      ref={mergedRef}
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
    RefAttributes<MultiselectProps.Ref>,
    Omit<UseControllerProps<T, TName>, 'control'> {}
