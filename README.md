# cloudscape-rhf

[React Hook Form](https://react-hook-form.com/) wrappers for [Cloudscape Design System](https://cloudscape.design/) components.

Each component connects a Cloudscape control to a surrounding `FormProvider` context — handling field registration, value binding, blur/change validation, and error propagation automatically.

## Installation

```bash
npm install cloudscape-rhf
```

### Peer dependencies

You must have these installed in your project:

```bash
npm install react react-hook-form @cloudscape-design/components
```

## Usage

Wrap your form in `FormProvider`, then drop in any `cloudscape-rhf` component. Pass `name` (the field key) and any props the underlying Cloudscape component accepts.

```tsx
import { useForm, FormProvider } from 'react-hook-form';
import { RhfFormField, RhfInput, RhfSelect } from 'cloudscape-rhf';

type FormValues = {
  username: string;
  role: { value: string; label: string } | null;
};

export default function MyForm() {
  const methods = useForm<FormValues>();

  const onSubmit = (data: FormValues) => console.log(data);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <RhfFormField name="username" label="Username">
          <RhfInput
            name="username"
            rules={{ required: 'Username is required' }}
          />
        </RhfFormField>

        <RhfFormField name="role" label="Role">
          <RhfSelect
            name="role"
            rules={{ required: 'Role is required' }}
            options={[
              { value: 'admin', label: 'Admin' },
              { value: 'viewer', label: 'Viewer' },
            ]}
          />
        </RhfFormField>

        <button type="submit">Submit</button>
      </form>
    </FormProvider>
  );
}
```

## Components

| Component | Wraps |
|---|---|
| `RhfAutosuggest` | `Autosuggest` |
| `RhfCheckbox` | `Checkbox` |
| `RhfDatePicker` | `DatePicker` |
| `RhfFormField` | `FormField` — displays field-level validation errors automatically |
| `RhfInput` | `Input` |
| `RhfMultiselect` | `Multiselect` |
| `RhfRadioGroup` | `RadioGroup` |
| `RhfSelect` | `Select` |
| `RhfSlider` | `Slider` |
| `RhfTextarea` | `Textarea` |
| `RhfTiles` | `Tiles` |
| `RhfTimeInput` | `TimeInput` |

## Props

Every component accepts:

- All props from the underlying Cloudscape component (except controlled value props like `value`, `checked`, `selectedOption`, etc. — those are managed by RHF)
- `name` — field path in your form schema (type-safe via generics)
- `rules` — RHF validation rules (`required`, `min`, `max`, `pattern`, etc.)
- `onBlur` / `onChange` — optional callbacks that run after RHF's own handlers

## License

MIT
