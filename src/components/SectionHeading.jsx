function SectionHeading({ eyebrow, title, description, align = 'center', light = false }) {
  const classes = [
    'section-heading',
    `section-heading--${align}`,
    light ? 'section-heading--light' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={classes}>
      {eyebrow && <p className={`eyebrow ${light ? 'eyebrow--light' : ''}`}>{eyebrow}</p>}
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  )
}

export default SectionHeading
