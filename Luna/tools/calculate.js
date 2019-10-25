function pixelMultiplier(value, multipler) {
    return `${(parseInt(value, 10) * multipler).toString()  }px`
}

export { pixelMultiplier }