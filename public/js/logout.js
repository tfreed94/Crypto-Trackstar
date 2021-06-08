const logout = async () => {
  const response = await fetch('/api/user/logout', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    alert(response.statusText);
  }
};

$('.logout-btn').on('click', logout);