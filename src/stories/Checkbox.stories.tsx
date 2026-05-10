import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import RhfCheckbox from '../checkbox';
import RhfFormField from '../form-field';
import { FormWrapper, ErrorFormWrapper } from './story-utils';

const meta: Meta<typeof RhfCheckbox> = {
  title: 'Components/Checkbox',
  component: RhfCheckbox,
};
export default meta;

type Story = StoryObj<typeof RhfCheckbox>;

export const Default: Story = {
  render: () => (
    <FormWrapper defaultValues={{ agree: false }}>
      <RhfCheckbox name="agree">I agree to the terms and conditions</RhfCheckbox>
    </FormWrapper>
  ),
};

export const Checked: Story = {
  render: () => (
    <FormWrapper defaultValues={{ agree: true }}>
      <RhfCheckbox name="agree">I agree to the terms and conditions</RhfCheckbox>
    </FormWrapper>
  ),
};

export const Disabled: Story = {
  render: () => (
    <FormWrapper defaultValues={{ agree: false }}>
      <RhfCheckbox name="agree" disabled>
        This option is not available
      </RhfCheckbox>
    </FormWrapper>
  ),
};

export const WithError: Story = {
  render: () => (
    <ErrorFormWrapper
      defaultValues={{ agree: false }}
      errors={{ agree: 'You must accept the terms to continue' }}
    >
      <RhfFormField name="agree" label="">
        <RhfCheckbox name="agree">I agree to the terms and conditions</RhfCheckbox>
      </RhfFormField>
    </ErrorFormWrapper>
  ),
};
