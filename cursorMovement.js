//For easy movement, especially useful for testing
class CursorMovementsClass {
    cursorRight() {
      //35 width times 5 to accomodate size of font's width
      if (horizontalCursorPosition >= 170) {
        //alert(horizontalCursorPosition);
        horizontalCursorPosition = 170
        return -1
      }

      drawGrid(100, 100)
      horizontalCursorPosition = horizontalCursorPosition + 5
      this.drawCursor(
        horizontalCursorPosition + HOFFSET,
        verticalCursorPosition + VOFFSET
      )
    }

    cursorLeft() {
      // console.log(horizontalCursorPosition);
      if (horizontalCursorPosition <= 0) {
        horizontalCursorPosition = 0
        return -1
      }

      drawGrid(100, 100)
      horizontalCursorPosition = horizontalCursorPosition - 5

      this.drawCursor(
        horizontalCursorPosition + HOFFSET,
        verticalCursorPosition + VOFFSET
      )
    }
    cursorUp() {
      
      if (verticalCursorPosition <= 0) {
        verticalCursorPosition = 0
        return -1
      }
      drawGrid(100, 100)
      verticalCursorPosition = verticalCursorPosition - 10

      this.drawCursor(
        horizontalCursorPosition + HOFFSET,
        verticalCursorPosition + VOFFSET
      )

      
    }
    cursorDown() {

      if (((verticalCursorPosition + 10 )/10 )>= gLastLine)
      {
        console.log("vert: ", verticalCursorPosition);
        console.log("lline: ", gLastLine);

        return -1
      }
      if (verticalCursorPosition/10  >= HEIGHT) {
      
        return -2
      }

      drawGrid(100, 100)
      verticalCursorPosition = verticalCursorPosition + 10
      this.drawCursor(
        horizontalCursorPosition + HOFFSET,
        verticalCursorPosition + VOFFSET
      )
  
      
    }

    drawCursor(x, y) {
      ctx.font = '10px Monospace'
      ctx.fillStyle = 'red'
      ctx.fillText('_', x - 5, y)
  }
  
  
  }