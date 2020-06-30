using Angular8NetCore3.Server.Data;
using Angular8NetCore3.Server.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Angular8NetCore3.Server.Repository
{
    public class PaymentDetailRepository : IPaymentDetailRepository
    {

        ApplicationDbContext _db;

        public PaymentDetailRepository(ApplicationDbContext db)
        {
            db = _db;
        }


        public async Task<int> AddPaymentDetail(PaymentDetail paymentDetail)
        {
            if (_db != null)
            {
                await _db.PaymentDetails.AddAsync(paymentDetail);
                await _db.SaveChangesAsync();

                return paymentDetail.PMId;
            }

            return 0;
        }

        public async Task<int> DeletePaymentDetail(int? pmId)
        {
            int result = 0;

            if (_db != null)
            {
                //Find the post for specific post id
                var paymentDetail = await _db.PaymentDetails.FirstOrDefaultAsync(x => x.PMId == pmId);

                if (paymentDetail != null)
                {
                    //Delete that post
                    _db.PaymentDetails.Remove(paymentDetail);

                    //Commit the transaction
                    result = await _db.SaveChangesAsync();
                }
                return result;
            }

            return result;
        }

        public async Task<PaymentDetail> GetPaymentDetail(int? pmId)
        {
            if (_db != null)
            {
                return await(from p in _db.PaymentDetails
                            
                             where p.PMId == pmId
                             select new PaymentDetail
                             {
                                 PMId = p.PMId,
                                 CardNumber = p.CardNumber,
                                 CardOwnerName = p.CardOwnerName,
                                 CVV = p.CVV,
                                 ExpirationDate = p.ExpirationDate
                             }).FirstOrDefaultAsync();
            }

            return null;


        }

        public async Task<List<PaymentDetail>> GetPaymentDetails()
        {
            if (_db != null)
            {
                return await _db.PaymentDetails.ToListAsync();
            }

            return null;


            //if (_db != null)
            //{
            //    return await (from p in db.Post
            //                  from c in db.Category
            //                  where p.CategoryId == c.Id
            //                  select new PostViewModel
            //                  {
            //                      PostId = p.PostId,
            //                      Title = p.Title,
            //                      Description = p.Description,
            //                      CategoryId = p.CategoryId,
            //                      CategoryName = c.Name,
            //                      CreatedDate = p.CreatedDate
            //                  }).ToListAsync();
            //}

            //return null;

        }

        public  async Task UpdatePaymentDetail(PaymentDetail paymentDetail)
        {
            if (_db != null)
            {
                //Delete that post
                _db.PaymentDetails.Update(paymentDetail);

                //Commit the transaction
                await _db.SaveChangesAsync();
            }
        }
    }
}
