import React from 'react'
import PropTypes from 'prop-types'
import {
  StyleGuide,
  Mega,
  Jumbo,
  ExtraLarge,
  Large,
  BodyCopy,
  Small,
  TextLink,
  ColorSwatch,
  ColorSwatchRow,
  ColorSwatchBlock,
  ButtonRow,
  StyleguideTitle,
} from './index.style'
import {
  FullWidth,
  ButtonGroup,
  ButtonBrand,
  ButtonContrast,
  ButtonAccent,
  ButtonText,
  Separator,
  Stack,
  InputWithLabel,
  SelectWithLabel,
  ValidationMessage,
  SuccessMessage,
  TextAreaWithLabel,
} from '../components'

import { Spacer } from '../tools'

import { Color } from '../config/color'

const SELECT_OPTIONS = [
  { label: 'Ms', value: 'Ms' },
  { label: 'Mrs', value: 'Mrs' },
  { label: 'Miss', value: 'Miss' },
  { label: 'Mr', value: 'Mr' },
  { label: 'Dr', value: 'Dr' },
]

function renderPrimaryColorBlocks() {
  return Object.keys(Color.primary).map(name => (
    <ColorSwatchBlock>
      <ColorSwatch backgroundColor={Color.primary[name]} />
      <Small>{name}</Small>
    </ColorSwatchBlock>
  ))
}

function renderSecondaryColorBlocks() {
  return Object.keys(Color.secondary).map(name => (
    <ColorSwatchBlock>
      <ColorSwatch backgroundColor={Color.secondary[name]} />
      <Small>{name}</Small>
    </ColorSwatchBlock>
  ))
}

function renderErrorColorBlocks() {
  return Object.keys(Color.error).map(name => (
    <ColorSwatchBlock>
      <ColorSwatch backgroundColor={Color.error[name]} />
      <Small>{name}</Small>
    </ColorSwatchBlock>
  ))
}

function renderSuccessColorBlocks() {
  return Object.keys(Color.success).map(name => (
    <ColorSwatchBlock>
      <ColorSwatch backgroundColor={Color.success[name]} />
      <Small>{name}</Small>
    </ColorSwatchBlock>
  ))
}

const ThisStyleGuide = ({ children }) => (
  <FullWidth>
    <StyleGuide>
      <Stack>
        <StyleguideTitle>Color Palette</StyleguideTitle>
        <Separator />
        <Large>Primary Colors</Large>
        <ColorSwatchRow>{renderPrimaryColorBlocks()}</ColorSwatchRow>
        <Large>Secondary Colors</Large>
        <ColorSwatchRow>{renderSecondaryColorBlocks()}</ColorSwatchRow>
        <Large>Other Colors</Large>
        <ColorSwatchRow>
          <ColorSwatchBlock>
            <ColorSwatch backgroundColor={Color.foreground} />
            <Small>foreground</Small>
          </ColorSwatchBlock>
          <ColorSwatchBlock>
            <ColorSwatch
              backgroundColor={Color.background}
              borderColor={Color.border}
            />
            <Small>background</Small>
          </ColorSwatchBlock>
          <ColorSwatchBlock>
            <ColorSwatch backgroundColor={Color.neutral} />
            <Small>neutral</Small>
          </ColorSwatchBlock>
          <ColorSwatchBlock>
            <ColorSwatch backgroundColor={Color.border} />
            <Small>border</Small>
          </ColorSwatchBlock>
        </ColorSwatchRow>
        <Large>Error Colors</Large>
        <ColorSwatchRow>{renderErrorColorBlocks()}</ColorSwatchRow>
        <Large>Success Colors</Large>
        <ColorSwatchRow>{renderSuccessColorBlocks()}</ColorSwatchRow>
        <ColorSwatchRow></ColorSwatchRow>

        <Spacer spaceMultiplier={4} />

        <Separator />

        <Spacer spaceMultiplier={4} />

        <StyleguideTitle>Buttons</StyleguideTitle>
        <Separator />
        <ButtonRow>
          <ButtonBrand>Button Brand</ButtonBrand>
          <ButtonContrast>Button Contrast</ButtonContrast>
          <ButtonAccent>Button Accent</ButtonAccent>
        </ButtonRow>

        <ButtonRow>
          <ButtonBrand disabled>Brand Disabled</ButtonBrand>
          <ButtonContrast disabled>Contrast Disabled</ButtonContrast>
          <ButtonAccent disabled>Accent Disabled</ButtonAccent>
        </ButtonRow>

        <Spacer spaceMultiplier={4} />

        <StyleguideTitle>Font Styles</StyleguideTitle>
        <Separator />

        <Mega>Mega</Mega>
        <Jumbo>Jumbo</Jumbo>
        <ExtraLarge>ExtraLarge</ExtraLarge>
        <Large>Large</Large>
        <BodyCopy>BodyCopy for bits of text and paragraphs etc.</BodyCopy>
        <Small>Small</Small>

        <BodyCopy>
          This is an example of a <TextLink>TextLink</TextLink> inside another
          style.
        </BodyCopy>

        <BodyCopy>
          <ButtonText>Button Text</ButtonText> - This is a button which takes
          the styles from TextLink
        </BodyCopy>

        <Spacer spaceMultiplier={4} />

        <StyleguideTitle>Form Elements</StyleguideTitle>
        <Separator />

        <Large>Validation Message</Large>
        <ValidationMessage message="Oh dear! Something went wrong!" />
        <SuccessMessage message="Yes! Something went right!" />
        <Separator />

        <Spacer spaceMultiplier={4} />

        <StyleguideTitle>Form Fields</StyleguideTitle>
        <Separator />

        <InputWithLabel
          name="defaultInput"
          label="Default input field"
          placeholder="Placeholder text"
        />

        <InputWithLabel
          name="defaultInput-error"
          label="Input field - error!"
          value="Fix this field"
          onChange={() => {}}
          valid={false}
        />

        <InputWithLabel
          name="defaultInput-disabled"
          label="Input field - disabled"
          value="I am disabled"
          onChange={() => {}}
          disabled
        />

        <SelectWithLabel
          label="Default select dropdown"
          defaultText="Choose option"
          options={SELECT_OPTIONS}
          name="defaultSelect"
        />

        <SelectWithLabel
          valid={false}
          label="Select dropdown - error!"
          defaultText="Choose option"
          options={SELECT_OPTIONS}
          name="defaultSelect-error"
        />

        <SelectWithLabel
          disabled
          label="Select dropdown - disabled"
          defaultText="Choose option"
          options={SELECT_OPTIONS}
          name="defaultSelect-error"
        />

        <TextAreaWithLabel
          label="Default text area"
          placeholder="Start typing..."
          name="defaultTextArea"
        />

        <TextAreaWithLabel
          label="Text area - error!"
          value="This is wrong!"
          onChange={() => {}}
          valid={false}
          name="defaultTextArea-error"
        />

        <TextAreaWithLabel
          label="Text area - disabled"
          value="I am disabled!"
          onChange={() => {}}
          name="defaultTextArea-disabled"
          disabled
        />

        <Spacer spaceMultiplier={4} />

        <StyleguideTitle>Button Groups</StyleguideTitle>
        <Separator />

        <ButtonGroup>
          <ButtonBrand selected>Button 1</ButtonBrand>
          <ButtonBrand>Button 2</ButtonBrand>
          <ButtonBrand>Button 3</ButtonBrand>
        </ButtonGroup>

        <ButtonGroup>
          <ButtonContrast>Button 1</ButtonContrast>
          <ButtonContrast selected>Button 2</ButtonContrast>
          <ButtonContrast>Button 3</ButtonContrast>
          <ButtonContrast>Button 4</ButtonContrast>
        </ButtonGroup>

        <ButtonGroup>
          <ButtonAccent>Button 1</ButtonAccent>
          <ButtonAccent selected>Button 2</ButtonAccent>
        </ButtonGroup>

        {children}
      </Stack>
    </StyleGuide>
  </FullWidth>
)

ThisStyleGuide.propTypes = {
  children: PropTypes.node,
}

export { ThisStyleGuide as BaseStyleguide }
