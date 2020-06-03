function calculate() {
    //Constants
    let min_xp_gain_per_message = 15;
    let max_xp_gain_per_message = 25;

    //Input from user
    let desired_level = document.getElementById("desired-level").value;
    let current_level = document.getElementById("current-level").value;
    let current_xp = document.getElementById("current-xp").value;

    //Math functions to determine XP requirements
    let xp_to_desired_level = 5 / 6 * desired_level * (2 * desired_level * desired_level + 27 * desired_level + 91);
    let xp_of_current_level = 5 / 6 * current_level * (2 * current_level * current_level + 27 * current_level + 91);
    let xp_needed = Math.round(xp_to_desired_level - xp_of_current_level - current_xp);

    //Minimum, average, and maximum messages needed to send in order to reach specified level
    let min_messages_needed_to_send = Math.ceil(xp_needed / max_xp_gain_per_message);
    let avg_messages_needed_to_send = Math.ceil(xp_needed / ((min_xp_gain_per_message + max_xp_gain_per_message) / 2));
    let max_messages_needed_to_send = Math.ceil(xp_needed / min_xp_gain_per_message);

    //Display information to user
    document.getElementById("total-xp").innerHTML = xp_of_current_level - (-1 * current_xp);
    document.getElementById("result-average").innerHTML = minutesToString(avg_messages_needed_to_send);
    document.getElementById("result-xp-needed").innerHTML = xp_needed;
    document.getElementById("result-minimum-messages-requirement").innerHTML = min_messages_needed_to_send;
    document.getElementById("result-maximum-messages-requirement").innerHTML = max_messages_needed_to_send;
}

function minutesToString(minutes) {
    if (minutes == 0) return '0 minutes';

    let timeIncrement = [
        [Math.floor(minutes / 525600), 'years'],
        [Math.floor((minutes % 525600) / 1440), 'days'],
        [Math.floor(((minutes % 525600) % 1440) / 60), 'hours'],
        [Math.floor(((minutes % 525600) % 1440) % 60), 'minutes']
    ]
    let retVal = '';

    for (let i = 0; i < timeIncrement.length; i++) {
        if (timeIncrement[i][0] === 0) continue;
        retVal += ' ' + timeIncrement[i][0] + ' ' + (timeIncrement[i][0] === 1 ? timeIncrement[i][1].substr(0, timeIncrement[i][1].length-1): timeIncrement[i][1]) + ",";
    }

    return retVal.substring(0, retVal.length - 1).trim();
}
