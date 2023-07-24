export default () => {
  // Don't include template tags as template will be injected into one
  return `
    <style>
    
    </style>
    <canvas id="color-wheel"></canvas>
    <select name="colors" id="cw-select-colors">
    <option value="complementary">Complementary!!!</option>
    <option value="analogous">Analogous</option>
    <option value="triadic">Triadic</option>
    <option value="tetradic">Tetradic</option>
    </select>
    <div style="width: 100%; height: 100px; border: 3px solid black" id="cw-palette"></div>
    <script>
    core()
    console.log('Haha')
    </script>
`
}
