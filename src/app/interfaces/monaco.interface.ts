export interface IEditorMinimapOptions {
  /**
   * Enable the rendering of the minimap.
   * Defaults to true.
   */
  enabled?: boolean;
  /**
   * Control the side of the minimap in editor.
   * Defaults to 'right'.
   */
  side?: 'right' | 'left';
  /**
   * Control the minimap rendering mode.
   * Defaults to 'actual'.
   */
  size?: 'proportional' | 'fill' | 'fit';
  /**
   * Control the rendering of the minimap slider.
   * Defaults to 'mouseover'.
   */
  showSlider?: 'always' | 'mouseover';
  /**
   * Render the actual text on a line (as opposed to color blocks).
   * Defaults to true.
   */
  renderCharacters?: boolean;
  /**
   * Limit the width of the minimap to render at most a certain number of columns.
   * Defaults to 120.
   */
  maxColumn?: number;
  /**
   * Relative size of the font in the minimap. Defaults to 1.
   */
  scale?: number;
}
