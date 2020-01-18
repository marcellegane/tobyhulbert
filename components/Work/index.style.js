import styled from 'styled-components'
import { pxToRem, Luna } from '../../Luna'

const Work = styled.div`
  position: relative;
  width: calc(100% - ${pxToRem(400)});
  max-width: ${pxToRem(840)};
  margin-top: 82vh;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 10vh;
  background: ${Luna.color.background};
`

const WorkGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: ${pxToRem(Luna.layout.grid.unit)};
`

const FilmGrid = styled.div`
  columns: 6 200px;
  column-gap: ${pxToRem(Luna.layout.grid.unit)};
  margin-top: ${pxToRem(Luna.layout.grid.unit)};
`

const WorkImg = styled.img`
  display: block;
`

const FilmImg = styled.img`
  display: block;
  margin-top: ${pxToRem(Luna.layout.grid.unit)};

  :first-child {
    margin-top: 0;
  }
`

export { Work, WorkGrid, FilmGrid, WorkImg, FilmImg }
