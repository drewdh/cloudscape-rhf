import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import RhfTextarea from '../textarea';
import RhfFormField from '../form-field';
import { FormWrapper, ErrorFormWrapper } from './story-utils';

const meta: Meta<typeof RhfTextarea> = {
  title: 'Components/Textarea',
  component: RhfTextarea,
};
export default meta;

type Story = StoryObj<typeof RhfTextarea>;

export const Default: Story = {
  render: () => (
    <FormWrapper defaultValues={{ description: '' }}>
      <RhfFormField name="description" label="Description">
        <RhfTextarea name="description" placeholder="Enter a description..." />
      </RhfFormField>
    </FormWrapper>
  ),
};

export const WithValue: Story = {
  render: () => (
    <FormWrapper defaultValues={{ description: 'This is a pre-filled description.' }}>
      <RhfFormField name="description" label="Description">
        <RhfTextarea name="description" rows={4} />
      </RhfFormField>
    </FormWrapper>
  ),
};

export const Disabled: Story = {
  render: () => (
    <FormWrapper defaultValues={{ description: 'Read-only content.' }}>
      <RhfFormField name="description" label="Description">
        <RhfTextarea name="description" disabled />
      </RhfFormField>
    </FormWrapper>
  ),
};

export const WithError: Story = {
  render: () => (
    <ErrorFormWrapper
      defaultValues={{ description: '' }}
      errors={{ description: 'Description is required' }}
    >
      <RhfFormField name="description" label="Description">
        <RhfTextarea name="description" placeholder="Enter a description..." />
      </RhfFormField>
    </ErrorFormWrapper>
  ),
};
