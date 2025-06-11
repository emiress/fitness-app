'use client';
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import './workoutPage.css';

const Page = () => {
  const { category } = useParams(); 
  const [workout, setWorkout] = useState<any>(null);

  const getWorkout = async () => {
    
    let data: any = {
      type: category,
      imageUrl: 'https://images.unsplash.com/photo-1600037827534-5770c468049b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0',
      durationInMin: 30,
      exercises: [
        {
          exercises: 'Archer Push-up',
          videoUrl: 'https://gymvisual.com/img/p/2/0/9/4/8/20948.gif',
          sets: 3,
          reps: 10,
          rest: 60,
          description: 'Raising both arms above the head, bend the elbows, and interlace the fingers behind the head.'
        },
        {
          exercises: 'Above Head Chest Stretch (female)',
          videoUrl: 'https://gymvisual.com/img/p/2/1/7/4/7/21747.gif',
          sets: 3,
          reps: 10,
          rest: 60,
          description: 'Raising both arms above the head, bend the elbows, and interlace the fingers behind the head.'
        },
        {
          exercises: 'Arm Crossover',
          videoUrl: 'https://gymvisual.com/img/p/2/3/7/9/3/23793.gif',
          sets: 3,
          reps: 10,
          rest: 60,
          description: 'Extend both arms straight in front of your shoulders, with palms facing each other.'
        },
      ],
    };

    setWorkout(data);
  };

  useEffect(() => {
    getWorkout();
  }, [category]);

  return (
    <div className='workout'>
      <h1 className='mainhead1'>{workout?.type} Day</h1>
      <div className='workout__excercises'>
        {workout?.exercises.map((item: any, index: number) => (
          <div
            key={index}
            className={
              index % 2 === 0
                ? 'workout__excercise'
                : 'workout__excercise workout__excercise--reverse'
            }
          >
            <h3>{index + 1}</h3>
            <div className='workout__excercise__image'>
              <img src={item.videoUrl} alt='video' />
            </div>
            <div className='workout__exercise__content'>
              <h2>{item.exercises}</h2>
              <span>
                {item.sets} sets X {item.reps} reps
              </span>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
