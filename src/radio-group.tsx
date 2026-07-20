import {
  type FieldPath,
  type FieldValues,
  useController,
  type UseControllerProps,
  useFormContext,
} from 'react-hook-form';
import RadioGroup, { RadioGroupProps } from '@cloudscape-design/components/radio-group';
import { RefAttributes } from 'react';

import useMergeRefs from './utilities/use-merge-refs';

export default function RhfRadioGroup<T extends FieldValues, TName extends FieldPath<T>>({
  name,
  onChange,
  ref,
  rules,
  ...props
}: Props<T, TName>) {
  const { control, trigger } = useFormContext<T, TName>();
  const { field, fieldState } = useController({ name, rules, control });
  const mergedRef = useMergeRefs(ref, field.ref);

  return (
    <RadioGroup
      {...props}
      ref={mergedRef}
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
    RefAttributes<RadioGroupProps.Ref>,
    Omit<UseControllerProps<T, TName>, 'control'> {}
