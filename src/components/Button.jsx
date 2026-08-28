function Button({ href, variant = 'primary', className = '', children, ...rest }) {
  const classes = `btn btn--${variant} ${className}`.trim()

  if (href) {
    const isInternal =
      href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')
    return (
      <a
        href={href}
        className={classes}
        {...(!isInternal ? { target: '_blank', rel: 'noreferrer' } : {})}
        {...rest}
      >
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={classes} {...rest}>
      {children}
    </button>
  )
}

export default Button
