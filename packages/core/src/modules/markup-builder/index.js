'use strict'

class MarkupBuilder {
  render (widget) {
    return `<div id="widget-container-${widget.id}" class="widget-container"></div>`
  }
}

module.exports = new MarkupBuilder()
