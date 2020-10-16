module.exports = (client) => {
    console.log('Ready to fight Motherfucker')

    client.user.setStatus('online');
    client.user.setActivity('type $help');
}