
var v = require('vector')

// Rect

module.exports = Rect

function Rect (pos, size) {
  if (!(this instanceof Rect)) return new Rect(pos, size)

  if (Array.isArray(pos)) {
    if (!Array.isArray(size)) {
      size = pos[1]
      pos = pos[0]
    }
  }
  else if ('object' == typeof pos && !(pos instanceof v)) {
    size = pos.size
    pos = pos.pos
  }
  else if ('string' == typeof pos) {
    pos = pos.split(' ')
    size = pos[1]
    pos = pos[0]
  }

  this.pos = v(pos)
  this.size = v(size)
}

Rect.prototype.toString = function () {
  return [this.pos, this.size].join(' ')
}

Rect.prototype.set = function (r) {
  this.pos = r.pos
  this.size = r.size
  return this
}
