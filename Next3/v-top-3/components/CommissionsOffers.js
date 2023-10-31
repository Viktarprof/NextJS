import React from 'react';
import s from '@/styles/Commissions.module.scss'
import Button from './UI/Button/Button';
import Link from 'next/link';


function CommissionsOffers({ commissions, setIsModalOpen })
{

  const openForm = () => {
    setIsModalOpen(true)
  }
  
  return (

    <>
    <ul className={s.commissionList}>
        {commissions.map(commission => (
        <li className={s.offerItem} key={commission.id}>
          <h4 className={s.titleComm}>{commission.title}</h4>
          <h2>{commission.percent}</h2>
          <p>{commission.info}</p>
        </li>
      ))}

    </ul>
    <Link href={'partners/'}>
      <Button 
      text="become a partner" style='btnCommisPartner'
      onClick={openForm}/>
    </Link>
    
    </>

  )
}

export default CommissionsOffers