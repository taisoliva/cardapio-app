
export const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>, setName: (value: string) => void, setNameError: (value: boolean) => void) => {
    setName(event.target.value);
    setNameError(false)
};

export const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>, setImage:(value:string) => void , setImageError: (value: boolean) => void) => {
    const inputValue = event.target.value;

    try {
        new URL(inputValue);
        setImageError(false);
    } catch (error) {
        setImageError(true);
    }

    setImage(inputValue);
};

export const handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>, setDescription:(value: string) => void, setDescriptionError: (value: boolean) => void) => {
    const inputValue = event.target.value
    const characterLimit = 150;

    if (inputValue.length <= characterLimit) {
        setDescription(event.target.value);
        setDescriptionError(false)
    }
};

export const handleMenuChange = (event: React.ChangeEvent<HTMLInputElement>, setSelectedMenu:(value: string) => void, setMenuError: (value: boolean) => void) => {
    setSelectedMenu(event.target.value); 
    setMenuError(false)
};

export const handleCategoryChange = (event: React.ChangeEvent<HTMLInputElement>, setCategoryId:(value: string) => void , setCategoryError: (value: boolean) => void) => {
    setCategoryId(event.target.value); 
    setCategoryError(false)
};