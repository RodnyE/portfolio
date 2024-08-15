
import { useState, useEffect, useRef } from 'react'
import styles from './pet.module.css'
import eyeSrc from '@/assets/robot-eye.png'
import headSrc from '@/assets/robot-head.png'
const { PI } = Math;

export function PetRobot({ watchPosition }) {
  const canvasRef = useRef(null);
  const [drawRobot, setDrawRobot] = useState(null);
  const [robot, setRobot] = useState({
    width: 150,
    x: 0,
    y: 0,
    radian: 0,
    maxEye: 6
  });

  useEffect(() => {
    let offsetX = canvasRef.current.offsetLeft;
    let offsetY = canvasRef.current.offsetTop;
    let sideX = watchPosition.x - offsetX;
    let sideY = watchPosition.y - offsetY;
    let radian = Math.atan2(sideY, sideX);
    setRobot(robot => ({ ...robot, radian }));
  }, [watchPosition]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // load assets
    const headImg = new Image();
    const eyeImg = new Image();
    headImg.src = headSrc;
    eyeImg.src = eyeSrc;

    let loop = 0;
    let lastRadian = robot.radian;
    let lastCloseEye = 100;
    const drawRobot = (robot) => {
      loop++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      let radian = lastRadian + (robot.radian - lastRadian) * 0.1;
      lastRadian = radian;

      // draw head
      ctx.save();
      ctx.translate(robot.width / 2, robot.width / 2);
      ctx.rotate(PI / 50 * Math.sin(radian));
      ctx.drawImage(headImg, -robot.width / 2, -robot.width / 2, robot.width, headImg.height / headImg.width * robot.width);
      ctx.restore();

      let closeEye = loop % lastCloseEye < 10;
      if (loop % lastCloseEye === 10) {
        lastCloseEye = 100 + Math.round(Math.random() * 300);
      }

      // draw eyes
      ctx.save();
      ctx.translate(robot.width / 3 + (robot.maxEye * 1.00) * Math.cos(radian), robot.width * 2 / 5 + robot.maxEye * Math.sin(radian));
      ctx.drawImage(eyeImg, -robot.width / 10, -robot.width / 10, robot.width / 5, closeEye ? 2 : robot.width / 5);
      ctx.restore();

      ctx.save();
      ctx.translate(robot.width * 2 / 3 + (robot.maxEye * 1.00) * Math.cos(radian), robot.width * 2 / 5 + robot.maxEye * Math.sin(radian));
      ctx.drawImage(eyeImg, -robot.width / 10, -robot.width / 10, robot.width / 5, closeEye ? 2 : robot.width / 5);
      ctx.restore();
    }

    function update() {
      setRobot(robot => {
        drawRobot(robot);
        return robot;
      });
      requestAnimationFrame(update);
    }

    update();
  }, [])

  return (
    <a href='#contact'>
      <canvas
        ref={canvasRef}
        width={robot.width}
        height={robot.width}
        className={styles.pet}
      />
    </a>
  )
}