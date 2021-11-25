/* Store ".slider", ".slider-value", ".slider-filler", ".selector", ".page-views" & ".billing-type" in variables */
const slider = document.querySelector(".slider")
const sliderValue = document.querySelector(".slider-value")
const sliderFilled = document.querySelector(".slider-filled")
const selector = document.querySelector(".selector")
const pageViews = document.querySelector(".page-views")
const billingType = document.querySelector(".billing-type")

/* Create function to convert the slider value
into currency for monthly or yearly billing */
const getPrice = () => {
    if (billingType.checked) {
        const discountedPrice = slider.value * 0.75
        sliderValue.innerHTML = discountedPrice.toLocaleString("en-ph", {
            style: "currency",
            currency: "PHP",
        })
        return  
    }

    const price = parseInt(slider.value)
    sliderValue.innerHTML = price.toLocaleString("en-ph", {
        style: "currency",
        currency: "PHP",
    })
}

// Listen for input change
slider.addEventListener("input", () => {
    // Within listner
    // Call function created to obtain currency value
    getPrice()
    // Calc page views based on slider value (100,000 for each value)
    if (parseInt(slider.value) === 0) {
        const freeVersion = 10000
        pageViews.innerHTML = freeVersion.toLocaleString()
    } else {
        const newValue = slider.value * 100000
        pageViews.innerHTML = newValue.toLocaleString()
    }

    // Get slider max value
    const maxValue = slider.getAttribute("max")

    // Cal percentage for filled bar & for selector button
    const percentage = (slider.value / maxValue) * 100

    // Set width of slider filled to current percentage
    sliderFilled.style.width = `${percentage}%`

    // Update the selector left & transform to percentage
    selector.style.left = `${percentage}%`
    selector.style.transform = `translateX(-${percentage}%)`
    
})

// Listen for billing type input change
billingType.addEventListener("change", () => {
    getPrice()
})