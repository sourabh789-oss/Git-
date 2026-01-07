import React from 'react'

const data = [
    {
        "user": {
            "id": 1024,
            "name": "Sourabh Prajapati",
            "email": "sourabh.prajapati@example.com",
            "age": 21,
            "role": "Full Stack Developer",
            "isActive": true,
            "skills": ["HTML", "CSS", "JavaScript", "Node.js", "MongoDB"],
            "address": {
                "city": "Indore",
                "state": "Madhya Pradesh",
                "country": "India",
                "pincode": 452001
            }
        },
        "projects": [
            {
                "projectId": "P101",
                "title": "Resume Analyzer",
                "status": "In Progress",
                "techStack": ["Python", "Tailwind CSS", "JavaScript"],
                "createdAt": "2025-01-12"
            },
            {
                "projectId": "P102",
                "title": "E-Commerce Website",
                "status": "Planned",
                "techStack": ["MERN Stack"],
                "createdAt": "2025-03-01"
            }
        ],
        "stats": {
            "totalProjects": 5,
            "completedProjects": 2,
            "experienceLevel": "Intermediate",
            "rating": 4.6
        }
    }

]

const RandomData = () => {

    return (
        <div>

            {
                data.map((element, index) => {
                  return  <div key={index}>
                        <div>{element.id} <span>{element.name}</span> email : <span>{element.email}</span></div>
                        <div>Age:{element.age}</div>
                        <div>Role:{element.role}</div>

                        {
                            element.skills.map((element, index) => {
                                <div key={index}>
                                    <span>{element}</span>
                                </div>
                            })
                        }

                    </div>
                })
            }

        </div>
    )
}

export default RandomData