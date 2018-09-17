const DefaultUserImg = 'data:image/png;base64,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';
module.exports = DefaultUserImg;