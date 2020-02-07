const { createElement, PureComponent } = require('react')
const { init } = require('../chart')

const defaultProps = {
  id: 'react-org-chart',
  downloadImageId: 'download-image',
  downloadPdfId: 'download-pdf',
  zoomInId: 'zoom-in',
  zoomOutId: 'zoom-out',
  zoomExtentId: 'zoom-extent',
}

class OrgChart extends PureComponent {
  render() {
    const { id } = Object.assign(defaultProps, this.props);

    return createElement('div', {
      id,
      style: {height: 700}
    })
  }



  componentDidMount() {

    const {
      id,
      downloadImageId,
      downloadPdfId,
      zoomInId,
      zoomOutId,
      zoomExtentId,
      tree,
      ...options
    } = Object.assign(defaultProps, this.props);

    init({
      id: `#${id}`,
      downloadImageId: `#${downloadImageId}`,
      downloadPdfId: `#${downloadPdfId}`,
      zoomInId: zoomInId,
      zoomOutId: zoomOutId,
      zoomExtentId: zoomExtentId,
      data: tree,
      ...options,
    })
  }
}

module.exports = OrgChart
