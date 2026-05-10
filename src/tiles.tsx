import {
  type FieldPath,
  type FieldValues,
  useController,
  type UseControllerProps,
  useFormContext,
} from 'react-hook-form';
import Tiles, { TilesProps } from '@cloudscape-design/components/tiles';

export default function RhfTiles<T extends FieldValues, TName extends FieldPath<T>>({
  name,
  onChange,
  rules,
  ...props
}: Props<T, TName>) {
  const { control, trigger } = useFormContext<T, TName>();
  const { field, fieldState } = useController({ name, rules, control });

  return (
    <Tiles
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
  extends Omit<TilesProps, 'value' | 'name'>,
    Omit<UseControllerProps<T, TName>, 'control'> {}
