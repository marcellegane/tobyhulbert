import React from 'react'
import PropTypes from 'prop-types'
import {
  StyleGuide,
  Title,
  Display,
  Large,
  BodyCopy,
  Small,
  TextLink,
  ColorSwatch,
  ColorSwatchRow,
  ColorSwatchBlock,
  ButtonRow,
  StyleguideTitle,
  ColorBlock,
} from './index.style'
import {
  ContentWrapper,
  ButtonBrand,
  ButtonContrast,
  ButtonAccent,
  ButtonAlternative,
  ButtonText,
  Stack,
  InputWithLabel,
  SelectWithLabel,
  ValidationMessage,
  SuccessMessage,
  TextAreaWithLabel,
} from '../..'
import {
  IconCross,
  IconMagnifyingGlass,
  IconPinpoint,
} from '../../../svgs/icons'

import { Spacer } from '../../../tools'

import { Color } from '../../../config/color'
import { Grid, GridItem } from '../../layouts/Grid'
import { IconWrapper } from '../../atoms/Icon/IconWrapper'
import { Font } from '../../../config/font'
import { TextStyles } from '../../../config/textStyle'

const SELECT_OPTIONS = [
  { label: 'Ms', value: 'Ms' },
  { label: 'Mrs', value: 'Mrs' },
  { label: 'Miss', value: 'Miss' },
  { label: 'Mr', value: 'Mr' },
  { label: 'Dr', value: 'Dr' },
]

function renderPrimaryColorBlocks() {
  return Object.keys(Color.primary).map(name => (
    <ColorSwatchBlock key={name}>
      <ColorSwatch backgroundColor={Color.primary[name]} />
      <Small>{name}</Small>
    </ColorSwatchBlock>
  ))
}

function renderSecondaryColorBlocks() {
  return Object.keys(Color.secondary).map(name => (
    <ColorSwatchBlock key={name}>
      <ColorSwatch backgroundColor={Color.secondary[name]} />
      <Small>{name}</Small>
    </ColorSwatchBlock>
  ))
}

function renderErrorColorBlocks() {
  return Object.keys(Color.error).map(name => (
    <ColorSwatchBlock key={name}>
      <ColorSwatch backgroundColor={Color.error[name]} />
      <Small>{name}</Small>
    </ColorSwatchBlock>
  ))
}

function renderSuccessColorBlocks() {
  return Object.keys(Color.success).map(name => (
    <ColorSwatchBlock key={name}>
      <ColorSwatch backgroundColor={Color.success[name]} />
      <Small>{name}</Small>
    </ColorSwatchBlock>
  ))
}

const ThisStyleGuide = ({ children }) => (
  <StyleGuide>
    <ContentWrapper>
      <Stack>
        <StyleguideTitle>Color Palette</StyleguideTitle>
        <Display>Primary Colors</Display>
        <ColorSwatchRow>{renderPrimaryColorBlocks()}</ColorSwatchRow>
        <Display>Secondary Colors</Display>
        <ColorSwatchRow>{renderSecondaryColorBlocks()}</ColorSwatchRow>
        <Display>Other Colors</Display>
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
        <Display>Error Colors</Display>
        <ColorSwatchRow>{renderErrorColorBlocks()}</ColorSwatchRow>
        <Display>Success Colors</Display>
        <ColorSwatchRow>{renderSuccessColorBlocks()}</ColorSwatchRow>
        <Spacer spaceMultiplier={3} />
        <StyleguideTitle>Font Styles</StyleguideTitle>
        <div>
          <BodyCopy># Title</BodyCopy>
          <Title>
            {Font.family.brand}, {Font.weight.normal}, {TextStyles.title.size} /{' '}
            {TextStyles.title.lineHeight}
          </Title>
        </div>
        <div>
          <BodyCopy># Display</BodyCopy>
          <Display>
            {Font.family.brand}, {Font.weight.normal}, {TextStyles.display.size}{' '}
            / {TextStyles.display.lineHeight}
          </Display>
        </div>
        <div>
          <BodyCopy># Large</BodyCopy>
          <Large>
            {Font.family.brand}, {Font.weight.normal}, {TextStyles.large.size} /{' '}
            {TextStyles.large.lineHeight}
          </Large>
        </div>
        <div>
          <BodyCopy># BodyCopy</BodyCopy>
          <BodyCopy>
            {Font.family.brand}, {Font.weight.normal},{' '}
            {TextStyles.bodyCopy.size} / {TextStyles.bodyCopy.lineHeight}
          </BodyCopy>
        </div>
        <div>
          <Small># Small</Small>
          <Small>
            {Font.family.brand}, {Font.weight.normal}, {TextStyles.small.size} /{' '}
            {TextStyles.small.lineHeight}
          </Small>
        </div>
        <BodyCopy>
          <ButtonText>Button Text</ButtonText> - This is a button which takes
          the styles from TextLink
        </BodyCopy>
        <Spacer spaceMultiplier={3} />
        <StyleguideTitle>Grid</StyleguideTitle>
        <Grid>
          <GridItem small={6} medium={4} large={3}>
            <ColorBlock />
          </GridItem>

          <GridItem small={6} medium={4} large={3}>
            <ColorBlock />
          </GridItem>

          <GridItem small={6} medium={4} large={3}>
            <ColorBlock />
          </GridItem>

          <GridItem small={6} medium={4} large={3}>
            <ColorBlock />
          </GridItem>

          <GridItem small={6} medium={4} large={3}>
            <ColorBlock />
          </GridItem>

          <GridItem small={6} medium={4} large={6}>
            <ColorBlock />
          </GridItem>

          <GridItem small={6} medium={4} large={3}>
            <ColorBlock />
          </GridItem>
        </Grid>
        <Spacer spaceMultiplier={3} />
        <StyleguideTitle>Components</StyleguideTitle>
        <Title>Buttons</Title>
        <ButtonRow>
          <ButtonBrand>Button Brand</ButtonBrand>
          <ButtonContrast>Button Contrast</ButtonContrast>
          <ButtonAccent>Button Accent</ButtonAccent>
          <ButtonAlternative>Button Alternative</ButtonAlternative>
        </ButtonRow>
        <ButtonRow>
          <ButtonBrand disabled>Brand Disabled</ButtonBrand>
          <ButtonContrast disabled>Contrast Disabled</ButtonContrast>
          <ButtonAccent disabled>Accent Disabled</ButtonAccent>
          <ButtonAlternative disabled>Alternative Disabled</ButtonAlternative>
        </ButtonRow>
        <Spacer spaceMultiplier={3} />
        <StyleguideTitle>Form Elements</StyleguideTitle>
        <Display>Validation Message</Display>
        <ValidationMessage message="Oh dear! Something went wrong!" />
        <SuccessMessage message="Yes! Something went right!" />
        <Spacer spaceMultiplier={3} />
        <StyleguideTitle>Form Fields</StyleguideTitle>
        <InputWithLabel
          name="defaultInput"
          label="Default input field"
          placeholder="Placeholder text"
          onChange={() => {}}
        />
        <InputWithLabel
          name="defaultInput-error"
          label="Input field - error!"
          value="Fix this field"
          valid={false}
          onChange={() => {}}
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
        <Spacer spaceMultiplier={3} />
        <StyleguideTitle>Icons</StyleguideTitle>
        <IconWrapper>
          <IconCross />
        </IconWrapper>{' '}
        <IconWrapper>
          <IconMagnifyingGlass />
        </IconWrapper>{' '}
        <IconWrapper width={24} height={34}>
          <IconPinpoint />
        </IconWrapper>
        {children}
      </Stack>
    </ContentWrapper>
  </StyleGuide>
)

ThisStyleGuide.propTypes = {
  children: PropTypes.node,
}

export { ThisStyleGuide as Styleguide }
