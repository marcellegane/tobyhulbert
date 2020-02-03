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
  justify-content: center;
`

const WorkItem = styled.button`
  position: relative;
  width: calc(100% - ${pxToRem('default')});
  max-width: ${pxToRem(300)};
  margin: ${pxToRem('default', 0.5)};
  padding: 0;
  overflow: hidden;
  font-family: ${Luna.font.family.brand};
  font-size: 1em;
  border: none;
  background: none;

  ${LunaMedia.above('xsmall')`
    width: calc(50% - ${pxToRem('default')});
  `}

  ${LunaMedia.above('small')`
    width: calc(33.3333% - ${pxToRem('default')});
  `}

  ${LunaMedia.above('xxlarge')`
    width: calc(25% - ${pxToRem('default')});
  `}
`

const WorkImg = styled.img`
  display: block;
  opacity: 0;
`

const WorkLoader = styled.div`
  position: absolute;
  top: ${pxToRem(-1)};
  right: ${pxToRem(-1)};
  bottom: ${pxToRem(-1)};
  left: ${pxToRem(-1)};
  background: #ffd519;
  transform: scaleY(0);
  transform-origin: 50% 0%;
`

const WorkOverlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: ${pxToRem(16)};
  text-align: left;
  background: #ffd519;
  opacity: 0;
  transition: opacity 0.15s ease;

  ${WorkItem}:hover &,
  ${WorkItem}:focus & {
    opacity: 1;
  }
`

const WorkArtist = styled.h3`
  font-size: 1.3125em;
  line-height: 1.2;
  font-weight: ${Luna.font.weight.bold};
`

const WorkProject = styled.h4`
  margin-top: ${pxToRem(4)};
  font-size: 1em;
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
  WorkLoader,
  WorkArtist,
  WorkProject,
  WorkRole,
  WorkOverlay,
  FilmImg,
}
