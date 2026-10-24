// DELETE route - Delete student by ID
app.delete('/students/:id', (req, res) => {
	const id = Number(req.params.id);
	const student = students.find((s) => s.id === id);

	if (!student) {
		return res.status(404).json({
			message: 'Student not found'
		});
	}

	students = students.filter((s) => s.id !== id);

	res.json({
		message: 'Student deleted successfully',
		student
	});
});

// Start Server
app.listen(3005, () => {
	console.log('Server running at http://localhost:3005');
});