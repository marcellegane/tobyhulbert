import styled from 'styled-components'
import { pxToRem, Luna, LunaMedia } from '../../Luna'

const Work = styled.div`
  position: relative;
  width: calc(100% - 4vw);
  margin-top: 75vh;
  margin-left: auto;
  margin-right: auto;
  padding-left: ${pxToRem('default', 0.5)};
  padding-right: ${pxToRem('default', 0.5)};
  padding-bottom: 10vh;

  ${LunaMedia.above('large')`
    width: calc(100% - 30vw);
  `}
`

const WorkGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const WorkItem = styled.button`
  position: relative;
  width: calc(50% - ${pxToRem('default')});
  margin: ${pxToRem('default', 0.5)};
  padding: 0;
  font-family: ${Luna.font.family.brand};
  font-size: 1em;
  border: none;
  background: none;

  ${LunaMedia.above('xsmall')`
    width: calc(33.3333% - ${pxToRem('default')});
  `}

  ${LunaMedia.above('small')`
    width: calc(25% - ${pxToRem('default')});
  `}
`

const WorkImg = styled.img`
  display: block;
  opacity: 0;
`

const WorkOverlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.5em;
  text-align: center;
  background: #ffd519;
  transform: scaleY(0);
  transform-origin: 50% 0%;
  transition: opacity 0.15s ease;

  ${WorkItem}:hover &,
  ${WorkItem}:focus & {
    opacity: 1;
  }

  > * {
    opacity: 0;
  }
`

const WorkArtist = styled.h3`
  font-size: 1.25em;
  font-weight: ${Luna.font.weight.bold};
`

const WorkProject = styled.h4`
  font-size: 1.125em;
  line-height: 1.2;
`

const WorkRole = styled.p`
  margin-top: 0.75em;
  font-size: 1.125em;
  line-height: 1.2;
`

const FilmGrid = styled.div`
  columns: 6 200px;
  column-gap: ${pxToRem(Luna.layout.grid.unit)};
  margin-top: ${pxToRem(Luna.layout.grid.unit)};
`

const FilmImg = styled.img`
  display: block;
  margin-top: ${pxToRem(Luna.layout.grid.unit)};

  :first-child {
    margin-top: 0;
  }
`

export {
  Work,
  WorkGrid,
  WorkItem,
  FilmGrid,
  WorkImg,
  WorkArtist,
  WorkProject,
  WorkRole,
  WorkOverlay,
  FilmImg,
}
