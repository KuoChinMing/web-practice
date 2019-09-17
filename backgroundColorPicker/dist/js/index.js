const colors=["White","Snow","HoneyDew","MintCream","Azure","AliceBlue","GhostWhite","WhiteSmoke","SeaShell","Beige","OldLace","FloralWhite","Ivory","AntiqueWhite","Linen","LavenderBlush","MistyRose","Gainsboro","LightGray","Silver","DarkGray","Gray","DimGray","LightSlateGray","SlateGray","DarkSlateGray","Black","IndianRed","LightCoral","Salmon","DarkSalmon","LightSalmon","Crimson","Red","FireBrick","DarkRed","Pink","LightPink","HotPink","DeepPink","MediumVioletRed","PaleVioletRed","Coral","Tomato","OrangeRed","DarkOrange","Orange","Gold","Yellow","LightYellow","LemonChiffon","LightGoldenRodYellow","PapayaWhip","Moccasin","PeachPuff","PaleGoldenRod","Khaki","DarkKhaki","Lavender","Thistle","Plum","Violet","Orchid","Fuchsia","Magenta","MediumOrchid","MediumPurple","RebeccaPurple","BlueViolet","DarkViolet","DarkOrchid","DarkMagenta","Purple","Indigo","SlateBlue","DarkSlateBlue","MediumSlateBlue","GreenYellow","ChartReuse","LawnGreen","Lime","LimeGreen","PaleGreen","LightGreen","MediumSpringGreen","SpringGreen","MediumSeaGreen","SeaGreen","ForestGreen","Green","DarkGreen","YellowGreen","OlivedRab","Olive","DarkOliveGreen","MediumAquamarine","DarkSeaGreen","LightSeaGreen","DarkCyan","Teal","Aqua","Cyan","LightCyan","PaleturQuoise","Aquamarine","Turquoise","MediumTurquoise","DarkTurquoise","CadetBlue","SteelBlue","LightSteelBlue","PowderBlue","LightBlue","SkyBlue","LightSkyBlue","DeepSkyBlue","DodgerBlue","CornFlowerBlue","MediumSlateBlue","RoyalBlue","Blue","MediumBlue","DarkBlue","Navy","MidnightBLue","CornSilk","BlanchedAlmond","Bisque","NavajoWhite","Wheat","BurlyWood","Tan","RosyBrown","SandyBrown","GoldenRod","DarkGoldenRod","Peru","Chocolate","SaddleBrown","Sienna","Brown","Maroon"];function copyToClipboard(e){const o=document.createElement("textarea");o.value=`background-color: ${e};`,document.body.appendChild(o),o.select(),document.execCommand("Copy"),o.remove()}function showTooltip(){const e=document.querySelector(".tooltip"),o=document.querySelector(".container").scrollTop-document.querySelector(".header").offsetHeight+event.clientY;e.style.opacity="1",e.style.left=`${event.clientX+-36}px`,e.style.top=`${o+24}px`}document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementsByClassName("header")[0],o=document.getElementsByClassName("container")[0];e.addEventListener("click",()=>{o.scrollTop=0});for(let e=0;e<colors.length;e+=1){const l=document.createElement("div");l.classList.add("color-palette"),l.innerHTML='<div class="color-palette__color"></div><p class="color-palette__text"></p>',l.getElementsByClassName("color-palette__color")[0].style.backgroundColor=colors[e],l.getElementsByClassName("color-palette__text")[0].innerHTML=colors[e],o.appendChild(l)}const l=document.querySelectorAll(".color-palette");for(let e=0;e<l.length;e+=1)l[e].addEventListener("click",()=>{copyToClipboard(l[e].querySelector(".color-palette__text").textContent),showTooltip()})});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImNvbG9ycyIsImNvcHlUb0NsaXBib2FyZCIsImNvbnRlbnQiLCJ0ZW1wVGV4dEFyZWEiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJ2YWx1ZSIsImJvZHkiLCJhcHBlbmRDaGlsZCIsInNlbGVjdCIsImV4ZWNDb21tYW5kIiwicmVtb3ZlIiwic2hvd1Rvb2x0aXAiLCJ0b29sdGlwIiwicXVlcnlTZWxlY3RvciIsImNsaWNrUG9zaXRpb25ZIiwic2Nyb2xsVG9wIiwib2Zmc2V0SGVpZ2h0IiwiZXZlbnQiLCJjbGllbnRZIiwic3R5bGUiLCJvcGFjaXR5IiwibGVmdCIsImNsaWVudFgiLCJ0b3AiLCJhZGRFdmVudExpc3RlbmVyIiwiaGVhZGVyIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImNvbnRhaW5lciIsImkiLCJsZW5ndGgiLCJjb2xvclBhbGV0dGUiLCJjbGFzc0xpc3QiLCJhZGQiLCJpbm5lckhUTUwiLCJiYWNrZ3JvdW5kQ29sb3IiLCJxdWVyeVNlbGVjdG9yQWxsIiwidGV4dENvbnRlbnQiXSwibWFwcGluZ3MiOiJBQUFBLE1BQU1BLE9BQVMsQ0FFYixRQUNBLE9BQ0EsV0FDQSxZQUNBLFFBQ0EsWUFDQSxhQUNBLGFBQ0EsV0FDQSxRQUNBLFVBQ0EsY0FDQSxRQUNBLGVBQ0EsUUFDQSxnQkFDQSxZQUVBLFlBQ0EsWUFDQSxTQUNBLFdBQ0EsT0FDQSxVQUNBLGlCQUNBLFlBQ0EsZ0JBQ0EsUUFFQSxZQUNBLGFBQ0EsU0FDQSxhQUNBLGNBQ0EsVUFDQSxNQUNBLFlBQ0EsVUFFQSxPQUNBLFlBQ0EsVUFDQSxXQUNBLGtCQUNBLGdCQUVBLFFBQ0EsU0FDQSxZQUNBLGFBQ0EsU0FDQSxPQUNBLFNBQ0EsY0FDQSxlQUNBLHVCQUNBLGFBQ0EsV0FDQSxZQUNBLGdCQUNBLFFBQ0EsWUFFQSxXQUNBLFVBQ0EsT0FDQSxTQUNBLFNBQ0EsVUFDQSxVQUNBLGVBQ0EsZUFDQSxnQkFDQSxhQUNBLGFBQ0EsYUFDQSxjQUNBLFNBQ0EsU0FDQSxZQUNBLGdCQUNBLGtCQUNBLGNBQ0EsYUFDQSxZQUNBLE9BQ0EsWUFDQSxZQUNBLGFBQ0Esb0JBQ0EsY0FDQSxpQkFDQSxXQUNBLGNBQ0EsUUFDQSxZQUNBLGNBQ0EsWUFDQSxRQUNBLGlCQUNBLG1CQUNBLGVBQ0EsZ0JBQ0EsV0FDQSxPQUVBLE9BQ0EsT0FDQSxZQUNBLGdCQUNBLGFBQ0EsWUFDQSxrQkFDQSxnQkFDQSxZQUNBLFlBQ0EsaUJBQ0EsYUFDQSxZQUNBLFVBQ0EsZUFDQSxjQUNBLGFBQ0EsaUJBQ0Esa0JBQ0EsWUFDQSxPQUNBLGFBQ0EsV0FDQSxPQUNBLGVBRUEsV0FDQSxpQkFDQSxTQUNBLGNBQ0EsUUFDQSxZQUNBLE1BQ0EsWUFDQSxhQUNBLFlBQ0EsZ0JBQ0EsT0FDQSxZQUNBLGNBQ0EsU0FDQSxRQUNBLFVBR0YsU0FBU0MsZ0JBQWdCQyxHQUN2QixNQUFNQyxFQUFlQyxTQUFTQyxjQUFjLFlBQzVDRixFQUFhRywyQkFBNkJKLEtBQzFDRSxTQUFTRyxLQUFLQyxZQUFZTCxHQUMxQkEsRUFBYU0sU0FDYkwsU0FBU00sWUFBWSxRQUNyQlAsRUFBYVEsU0FFZixTQUFTQyxjQUNQLE1BQU1DLEVBQVVULFNBQVNVLGNBQWMsWUFDakNDLEVBQWlCWCxTQUFTVSxjQUFjLGNBQWNFLFVBQVlaLFNBQVNVLGNBQWMsV0FBV0csYUFBZUMsTUFBTUMsUUFHL0hOLEVBQVFPLE1BQU1DLFFBQVUsSUFDeEJSLEVBQVFPLE1BQU1FLFFBQVVKLE1BQU1LLFNBSGIsT0FJakJWLEVBQVFPLE1BQU1JLE9BQVNULEVBSFAsT0FNbEJYLFNBQVNxQixpQkFBaUIsbUJBQW9CLEtBQzVDLE1BQU1DLEVBQVN0QixTQUFTdUIsdUJBQXVCLFVBQVUsR0FDbkRDLEVBQVl4QixTQUFTdUIsdUJBQXVCLGFBQWEsR0FFL0RELEVBQU9ELGlCQUFpQixRQUFTLEtBQy9CRyxFQUFVWixVQUFZLElBR3hCLElBQUssSUFBSWEsRUFBSSxFQUFHQSxFQUFJN0IsT0FBTzhCLE9BQVFELEdBQUssRUFBRyxDQUN6QyxNQUFNRSxFQUFlM0IsU0FBU0MsY0FBYyxPQUM1QzBCLEVBQWFDLFVBQVVDLElBQUksaUJBQzNCRixFQUFhRyxVQUFZLDhFQUN6QkgsRUFBYUosdUJBQXVCLHdCQUF3QixHQUFHUCxNQUFNZSxnQkFBa0JuQyxPQUFPNkIsR0FDOUZFLEVBQWFKLHVCQUF1Qix1QkFBdUIsR0FBR08sVUFBWWxDLE9BQU82QixHQUNqRkQsRUFBVXBCLFlBQVl1QixHQUd4QixNQUFNQSxFQUFlM0IsU0FBU2dDLGlCQUFpQixrQkFDL0MsSUFBSyxJQUFJUCxFQUFJLEVBQUdBLEVBQUlFLEVBQWFELE9BQVFELEdBQUssRUFDNUNFLEVBQWFGLEdBQUdKLGlCQUFpQixRQUFTLEtBRXhDeEIsZ0JBRGM4QixFQUFhRixHQUFHZixjQUFjLHdCQUF3QnVCLGFBRXBFekIiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjb2xvcnMgPSBbXG4gIC8vIHdoaXRlIGNvbG9yc1xuICAnV2hpdGUnLFxuICAnU25vdycsXG4gICdIb25leURldycsXG4gICdNaW50Q3JlYW0nLFxuICAnQXp1cmUnLFxuICAnQWxpY2VCbHVlJyxcbiAgJ0dob3N0V2hpdGUnLFxuICAnV2hpdGVTbW9rZScsXG4gICdTZWFTaGVsbCcsXG4gICdCZWlnZScsXG4gICdPbGRMYWNlJyxcbiAgJ0Zsb3JhbFdoaXRlJyxcbiAgJ0l2b3J5JyxcbiAgJ0FudGlxdWVXaGl0ZScsXG4gICdMaW5lbicsXG4gICdMYXZlbmRlckJsdXNoJyxcbiAgJ01pc3R5Um9zZScsXG4gIC8vIGdyYXkgY29sb3JzXG4gICdHYWluc2Jvcm8nLFxuICAnTGlnaHRHcmF5JyxcbiAgJ1NpbHZlcicsXG4gICdEYXJrR3JheScsXG4gICdHcmF5JyxcbiAgJ0RpbUdyYXknLFxuICAnTGlnaHRTbGF0ZUdyYXknLFxuICAnU2xhdGVHcmF5JyxcbiAgJ0RhcmtTbGF0ZUdyYXknLFxuICAnQmxhY2snLFxuICAvLyByZWQgY29sb3JzXG4gICdJbmRpYW5SZWQnLFxuICAnTGlnaHRDb3JhbCcsXG4gICdTYWxtb24nLFxuICAnRGFya1NhbG1vbicsXG4gICdMaWdodFNhbG1vbicsXG4gICdDcmltc29uJyxcbiAgJ1JlZCcsXG4gICdGaXJlQnJpY2snLFxuICAnRGFya1JlZCcsXG4gIC8vIHBpbmsgY29sb3JzXG4gICdQaW5rJyxcbiAgJ0xpZ2h0UGluaycsXG4gICdIb3RQaW5rJyxcbiAgJ0RlZXBQaW5rJyxcbiAgJ01lZGl1bVZpb2xldFJlZCcsXG4gICdQYWxlVmlvbGV0UmVkJyxcbiAgLy8gb3JhbmdlIGNvbG9yc1xuICAnQ29yYWwnLFxuICAnVG9tYXRvJyxcbiAgJ09yYW5nZVJlZCcsXG4gICdEYXJrT3JhbmdlJyxcbiAgJ09yYW5nZScsXG4gICdHb2xkJyxcbiAgJ1llbGxvdycsXG4gICdMaWdodFllbGxvdycsXG4gICdMZW1vbkNoaWZmb24nLFxuICAnTGlnaHRHb2xkZW5Sb2RZZWxsb3cnLFxuICAnUGFwYXlhV2hpcCcsXG4gICdNb2NjYXNpbicsXG4gICdQZWFjaFB1ZmYnLFxuICAnUGFsZUdvbGRlblJvZCcsXG4gICdLaGFraScsXG4gICdEYXJrS2hha2knLFxuICAvLyBwdXJwbGUgY29sb3JzXG4gICdMYXZlbmRlcicsXG4gICdUaGlzdGxlJyxcbiAgJ1BsdW0nLFxuICAnVmlvbGV0JyxcbiAgJ09yY2hpZCcsXG4gICdGdWNoc2lhJyxcbiAgJ01hZ2VudGEnLFxuICAnTWVkaXVtT3JjaGlkJyxcbiAgJ01lZGl1bVB1cnBsZScsXG4gICdSZWJlY2NhUHVycGxlJyxcbiAgJ0JsdWVWaW9sZXQnLFxuICAnRGFya1Zpb2xldCcsXG4gICdEYXJrT3JjaGlkJyxcbiAgJ0RhcmtNYWdlbnRhJyxcbiAgJ1B1cnBsZScsXG4gICdJbmRpZ28nLFxuICAnU2xhdGVCbHVlJyxcbiAgJ0RhcmtTbGF0ZUJsdWUnLFxuICAnTWVkaXVtU2xhdGVCbHVlJyxcbiAgJ0dyZWVuWWVsbG93JyxcbiAgJ0NoYXJ0UmV1c2UnLFxuICAnTGF3bkdyZWVuJyxcbiAgJ0xpbWUnLFxuICAnTGltZUdyZWVuJyxcbiAgJ1BhbGVHcmVlbicsXG4gICdMaWdodEdyZWVuJyxcbiAgJ01lZGl1bVNwcmluZ0dyZWVuJyxcbiAgJ1NwcmluZ0dyZWVuJyxcbiAgJ01lZGl1bVNlYUdyZWVuJyxcbiAgJ1NlYUdyZWVuJyxcbiAgJ0ZvcmVzdEdyZWVuJyxcbiAgJ0dyZWVuJyxcbiAgJ0RhcmtHcmVlbicsXG4gICdZZWxsb3dHcmVlbicsXG4gICdPbGl2ZWRSYWInLFxuICAnT2xpdmUnLFxuICAnRGFya09saXZlR3JlZW4nLFxuICAnTWVkaXVtQXF1YW1hcmluZScsXG4gICdEYXJrU2VhR3JlZW4nLFxuICAnTGlnaHRTZWFHcmVlbicsXG4gICdEYXJrQ3lhbicsXG4gICdUZWFsJyxcbiAgLy8gYmx1ZSBjb2xvcnNcbiAgJ0FxdWEnLFxuICAnQ3lhbicsXG4gICdMaWdodEN5YW4nLFxuICAnUGFsZXR1clF1b2lzZScsXG4gICdBcXVhbWFyaW5lJyxcbiAgJ1R1cnF1b2lzZScsXG4gICdNZWRpdW1UdXJxdW9pc2UnLFxuICAnRGFya1R1cnF1b2lzZScsXG4gICdDYWRldEJsdWUnLFxuICAnU3RlZWxCbHVlJyxcbiAgJ0xpZ2h0U3RlZWxCbHVlJyxcbiAgJ1Bvd2RlckJsdWUnLFxuICAnTGlnaHRCbHVlJyxcbiAgJ1NreUJsdWUnLFxuICAnTGlnaHRTa3lCbHVlJyxcbiAgJ0RlZXBTa3lCbHVlJyxcbiAgJ0RvZGdlckJsdWUnLFxuICAnQ29ybkZsb3dlckJsdWUnLFxuICAnTWVkaXVtU2xhdGVCbHVlJyxcbiAgJ1JveWFsQmx1ZScsXG4gICdCbHVlJyxcbiAgJ01lZGl1bUJsdWUnLFxuICAnRGFya0JsdWUnLFxuICAnTmF2eScsXG4gICdNaWRuaWdodEJMdWUnLFxuICAvLyBicm93biBjb2xvcnNcbiAgJ0Nvcm5TaWxrJyxcbiAgJ0JsYW5jaGVkQWxtb25kJyxcbiAgJ0Jpc3F1ZScsXG4gICdOYXZham9XaGl0ZScsXG4gICdXaGVhdCcsXG4gICdCdXJseVdvb2QnLFxuICAnVGFuJyxcbiAgJ1Jvc3lCcm93bicsXG4gICdTYW5keUJyb3duJyxcbiAgJ0dvbGRlblJvZCcsXG4gICdEYXJrR29sZGVuUm9kJyxcbiAgJ1BlcnUnLFxuICAnQ2hvY29sYXRlJyxcbiAgJ1NhZGRsZUJyb3duJyxcbiAgJ1NpZW5uYScsXG4gICdCcm93bicsXG4gICdNYXJvb24nLFxuXTtcblxuZnVuY3Rpb24gY29weVRvQ2xpcGJvYXJkKGNvbnRlbnQpIHtcbiAgY29uc3QgdGVtcFRleHRBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgdGVtcFRleHRBcmVhLnZhbHVlID0gYGJhY2tncm91bmQtY29sb3I6ICR7Y29udGVudH07YDtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0ZW1wVGV4dEFyZWEpO1xuICB0ZW1wVGV4dEFyZWEuc2VsZWN0KCk7XG4gIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdDb3B5Jyk7XG4gIHRlbXBUZXh0QXJlYS5yZW1vdmUoKTtcbn1cbmZ1bmN0aW9uIHNob3dUb29sdGlwKCkge1xuICBjb25zdCB0b29sdGlwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvb2x0aXAnKTtcbiAgY29uc3QgY2xpY2tQb3NpdGlvblkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJykuc2Nyb2xsVG9wIC0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcicpLm9mZnNldEhlaWdodCArIGV2ZW50LmNsaWVudFk7XG4gIGNvbnN0IG9mZnNldFggPSAtMzY7XG4gIGNvbnN0IG9mZnNldFkgPSAyNDtcbiAgdG9vbHRpcC5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuICB0b29sdGlwLnN0eWxlLmxlZnQgPSBgJHtldmVudC5jbGllbnRYICsgb2Zmc2V0WH1weGA7XG4gIHRvb2x0aXAuc3R5bGUudG9wID0gYCR7Y2xpY2tQb3NpdGlvblkgKyBvZmZzZXRZfXB4YDtcbn1cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaGVhZGVyJylbMF07XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NvbnRhaW5lcicpWzBdO1xuXG4gIGhlYWRlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb250YWluZXIuc2Nyb2xsVG9wID0gMDtcbiAgfSk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2xvcnMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBjb25zdCBjb2xvclBhbGV0dGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb2xvclBhbGV0dGUuY2xhc3NMaXN0LmFkZCgnY29sb3ItcGFsZXR0ZScpO1xuICAgIGNvbG9yUGFsZXR0ZS5pbm5lckhUTUwgPSAnPGRpdiBjbGFzcz1cImNvbG9yLXBhbGV0dGVfX2NvbG9yXCI+PC9kaXY+PHAgY2xhc3M9XCJjb2xvci1wYWxldHRlX190ZXh0XCI+PC9wPic7XG4gICAgY29sb3JQYWxldHRlLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NvbG9yLXBhbGV0dGVfX2NvbG9yJylbMF0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29sb3JzW2ldO1xuICAgIGNvbG9yUGFsZXR0ZS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjb2xvci1wYWxldHRlX190ZXh0JylbMF0uaW5uZXJIVE1MID0gY29sb3JzW2ldO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb2xvclBhbGV0dGUpO1xuICB9XG5cbiAgY29uc3QgY29sb3JQYWxldHRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbG9yLXBhbGV0dGUnKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2xvclBhbGV0dGUubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBjb2xvclBhbGV0dGVbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBjb25zdCBjb2xvciA9IGNvbG9yUGFsZXR0ZVtpXS5xdWVyeVNlbGVjdG9yKCcuY29sb3ItcGFsZXR0ZV9fdGV4dCcpLnRleHRDb250ZW50O1xuICAgICAgY29weVRvQ2xpcGJvYXJkKGNvbG9yKTtcbiAgICAgIHNob3dUb29sdGlwKCk7XG4gICAgICAvLyBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChjb2xvcik7XG4gICAgfSk7XG4gIH1cbn0pO1xuIl19
