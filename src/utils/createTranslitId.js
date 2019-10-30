import cyrillicToTranslit from 'cyrillic-to-translit-js';

const createTranslitId = (text) => cyrillicToTranslit().transform(text.replace(/\s+/g, '-').toUpperCase()).toUpperCase();

export default createTranslitId;
