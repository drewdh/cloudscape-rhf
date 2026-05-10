/**
 * A complete form example showing all cloudscape-rhf components working
 * together with validation. Submit the form with empty fields to see errors.
 */
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { FormProvider, useForm } from 'react-hook-form';
import Button from '@cloudscape-design/components/button';
import Form from '@cloudscape-design/components/form';
import SpaceBetween from '@cloudscape-design/components/space-between';
import Container from '@cloudscape-design/components/container';
import Header from '@cloudscape-design/components/header';
import RhfInput from '../input';
import RhfTextarea from '../textarea';
import RhfSelect from '../select';
import RhfMultiselect from '../multiselect';
import RhfCheckbox from '../checkbox';
import RhfDatePicker from '../date-picker';
import RhfFormField from '../form-field';

const REGION_OPTIONS = [
  { label: 'US East (N. Virginia)', value: 'us-east-1' },
  { label: 'US West (Oregon)', value: 'us-west-2' },
  { label: 'EU (Ireland)', value: 'eu-west-1' },
];

const TAG_OPTIONS = [
  { label: 'Production', value: 'production' },
  { label: 'Staging', value: 'staging' },
  { label: 'Development', value: 'development' },
];

interface FormValues {
  name: string;
  description: string;
  region: { label: string; value: string } | null;
  tags: { label: string; value: string }[];
  startDate: string;
  agree: boolean;
}

function CreateResourceForm() {
  const methods = useForm<FormValues>({
    defaultValues: {
      name: '',
      description: '',
      region: null,
      tags: [],
      startDate: '',
      agree: false,
    },
  });

  const onSubmit = (data: FormValues) => {
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} noValidate>
        <Form
          header={<Header variant="h1">Create resource</Header>}
          actions={
            <SpaceBetween direction="horizontal" size="xs">
              <Button variant="link">Cancel</Button>
              <Button variant="primary" formAction="submit">
                Create
              </Button>
            </SpaceBetween>
          }
        >
          <Container header={<Header variant="h2">Resource details</Header>}>
            <SpaceBetween size="l">
              <RhfFormField
                name="name"
                label="Resource name"
                constraintText="Must be 3–64 characters"
              >
                <RhfInput
                  name="name"
                  placeholder="my-resource"
                  rules={{
                    required: 'Resource name is required',
                    minLength: { value: 3, message: 'Must be at least 3 characters' },
                  }}
                />
              </RhfFormField>

              <RhfFormField name="description" label="Description" constraintText="Optional">
                <RhfTextarea name="description" placeholder="Describe the resource..." rows={3} />
              </RhfFormField>

              <RhfFormField name="region" label="AWS Region">
                <RhfSelect
                  name="region"
                  options={REGION_OPTIONS}
                  placeholder="Choose a region"
                  rules={{ required: 'Region is required' }}
                />
              </RhfFormField>

              <RhfFormField name="tags" label="Tags" constraintText="Optional">
                <RhfMultiselect
                  name="tags"
                  options={TAG_OPTIONS}
                  placeholder="Choose tags"
                />
              </RhfFormField>

              <RhfFormField name="startDate" label="Start date">
                <RhfDatePicker
                  name="startDate"
                  placeholder="YYYY/MM/DD"
                  rules={{ required: 'Start date is required' }}
                />
              </RhfFormField>

              <RhfFormField name="agree" label="">
                <RhfCheckbox
                  name="agree"
                  rules={{ required: 'You must accept the terms' }}
                >
                  I agree to the terms and conditions
                </RhfCheckbox>
              </RhfFormField>
            </SpaceBetween>
          </Container>
        </Form>
      </form>
    </FormProvider>
  );
}

const meta: Meta = {
  title: 'Examples/Full Form',
};
export default meta;

export const Default: StoryObj = {
  render: () => <CreateResourceForm />,
};
