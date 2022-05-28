async function getFeatureState() {
    console.log("getFeatureState called");
    let response = await fetch("/api/features/all");
    console.log(response);
    // axios
    //     .fetch("/api/features/all", {
    //         method: "GET",
    //         mode: "cors",
    //         cache: "default",
    //     })
    //     .then((res) => {
    //         console.log(res);
    //     });
}

getFeatureState()
function fetchAllFeatures() {
    console.log("fetchAllFeatures called");
    return new Promise((resolve) => {
        const sampleFeatures = {
            "extended-summary": true,
            "feedback-dialog": false,
        };
        getFeatureState("extended-summary").then(function (isEnabled) {
            if (isEnabled) {
                this.showExtendedSummary();
            } else {
                this.showBriefSummary();
            }
        });
        getFeatureState("feedback-dialog").then(function (isEnabled) {
            if (isEnabled) {
                this.makeFeedbackButtonVisible();
            }
        });
        setTimeout(resolve, 100, sampleFeatures);
    });
}