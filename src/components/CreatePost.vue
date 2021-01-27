<template>
    <div class="mt-5">
        <p class="create-heading text-center font-weight-bold">Have some delicious Recipe?</p>
        <div class="mx-5 p-5">
            <form class="">
                <!-- Input Title -->
                <label class="" for="title"
                >Title
                <input
                    class=""
                    type="text"
                    name="title"
                    id="title"
                    placeholder="Post Title"
                    required
                />
                </label>
                <!-- Input Description -->
                <label class="" for="description"
                >Post Description
                <input
                    class=""
                    type="description"
                    name="description"
                    id="description"
                    placeholder="Short Description in one or two line"
                    required
                />
                </label>
                <label for="category">
                    Choose Post Category:
                    <select name="categories" id="category">
                        <option value="Choose one category">Select</option>
                        <option value="vegetarian">Vegetarian</option>
                        <option value="non-Vegetarian">Non-Vegetarian</option>
                    </select>
                </label>
                <!-- Input Content -->
                <label class="" for="content">Enter Post Content</label>
                <textarea
                class=""
                name="content"
                id="content"
                cols="30"
                rows="5"
                placeholder="content"
                required
                ></textarea>
                <!-- Input Button -->
                <button class="btn-form my-3 p-2 px-3" type="submit">
                Submit
                </button>
            </form>        
        </div>
            
    </div>
</template>

<style scoped>
.create-heading {
    font-size: 2rem;
}
form > label, input, select, textarea, button {
    width: 100%;
    display: block;
}
input, textarea, select {
    margin-top: 8px;
    padding: 6px 8px;
}
label {
    margin-bottom: 16px;
}
</style>