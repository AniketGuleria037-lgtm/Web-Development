# HTML Tutorial Notes

## Lecture 1: Basic HTML Structure

### Paragraphs
- Use the `<p>` tag to create paragraphs.
- Example:
  ```html
  <p>We write our paragraph inside a paragraph tag.</p>
  ```

### Headings
- HTML supports six heading levels: `<h1>` through `<h6>`.
- `<h1>` is the largest and most important heading, while `<h6>` is the smallest.
- Example:
  ```html
  <h1>This is a heading</h1>
  <h2>This is a heading</h2>
  <h3>This is a heading</h3>
  <h4>This is a heading</h4>
  <h5>This is a heading</h5>
  <h6>This is a heading</h6>
  ```

## Lecture 2: Images, Links, and Tables

### Images
- Use the `<img>` tag to display images.
- Always include the `alt` attribute to provide alternate text when the image cannot load.
- Example:
  ```html
  <img src="https://cdn.mos.cms.futurecdn.net/avos2wbsjvdEyvfRJoK6v9-1200-80.jpg" alt="Image of sun">
  ```

### Hyperlinks
- Use the `<a>` tag with the `href` attribute to create links.
- `target="_blank"` opens the link in a new tab.

#### Link with text
```html
<a href="https://www.youtube.com/" target="_blank">Youtube</a>
```

#### Link with an image
```html
<a href="https://www.youtube.com/" target="_blank">
    <img src="https://clipground.com/images/youtube-icon-png-free-download-9.png" alt="YouTube icon">
</a>
```

### Tables
- Use `<table>` to create a table, `<tr>` for rows, `<th>` for headers, and `<td>` for data cells.
- Example table structure:
  ```html
  <table>
      <tr>
          <th>Name</th>
          <th>Breathing Style</th>
      </tr>
      <tr>
          <td>Sanemi</td>
          <td>Wind</td>
      </tr>
      <tr>
          <td>Giyu</td>
          <td>Water</td>
      </tr>
      <tr>
          <td>Renguko</td>
          <td>Flame</td>
      </tr>
      <tr>
          <td>Gyomie</td>
          <td>Stone</td>
      </tr>
      <tr>
          <td>Obanai</td>
          <td>Serpent</td>
      </tr>
  </table>
  ```

## Summary
- Lecture 1 covers HTML paragraph and heading tags.
- Lecture 2 introduces images (`<img>`), hyperlinks (`<a>`), and tables (`<table>`).
- Use semantic tags and attributes like `alt` and `target` to improve accessibility and user experience.
