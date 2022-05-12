let pupil = {
	name:"Haridev",
	roll:355,
	physics:88,
	chemistry:85,
	maths:90,
	computer:92,
	english:95,
}
function calculate(student)
{
	let totalMarks=student.physics+student.chemistry+student.maths+student.computer+student.english;
	let avg=totalMarks/5;
	if (90<=avg<=100)
	{student.grade="A"}
	else if(80<=avg<90)
	{student.grade="B"}
	else if(70<=avg<80)
	{student.grade="C"}
	else if(60<=avg<70)
	{student.grade="D"}
	else if(40<=avg<60)
	{student.grade="E"}
	else
	{student.grade="F"}
	console.log(totalMarks);
	console.log(avg);
	console.log(student.grade);
}
calculate(pupil);
