using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Angular8NetCore3.Server.Data;
using Angular8NetCore3.Server.Models;
using Angular8NetCore3.Server.Repository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Angular8NetCore3.Server.Controllers.RestApi
{
    [Route("api/[controller]")]
    [ApiController]
    public class PaymentDetailsController : ControllerBase
    {        
        IPaymentDetailRepository _paymentRepository;
        public PaymentDetailsController(IPaymentDetailRepository paymentRepository)
        {
            _paymentRepository = paymentRepository;
        }



        [HttpGet]
        [Route("GetPaymentDetails")]
        public async Task<IActionResult> GetPaymentDetails()
        {
            try
            {
                var paymentDetails = await _paymentRepository.GetPaymentDetails();
                if (paymentDetails == null)
                {
                    return NotFound();
                }

                return Ok(paymentDetails);
            }
            catch (Exception)
            {
                return BadRequest();
            }

        }

        [HttpGet]
        [Route("GetPaymentDetailById")]
        public async Task<IActionResult> GetPaymentDetailById(int? pmId)
        {
            if (pmId == null)
            {
                return BadRequest();
            }

            try
            {
                var post = await _paymentRepository.GetPaymentDetail(pmId);

                if (post == null)
                {
                    return NotFound();
                }

                return Ok(post);
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }

        [HttpPost]
        [Route("AddPaymentDetail")]
        public async Task<IActionResult> AddPost([FromBody] PaymentDetail model)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    var pmId = await _paymentRepository.AddPaymentDetail(model);
                    if (pmId > 0)
                    {
                        return Ok(pmId);
                    }
                    else
                    {
                        return NotFound();
                    }
                }
                catch (Exception)
                {

                    return BadRequest();
                }

            }

            return BadRequest();
        }



        [HttpPut]
        [Route("UpdatePaymentDetail")]
        public async Task<IActionResult> UpdatePost([FromBody] PaymentDetail model)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    await _paymentRepository.UpdatePaymentDetail(model);

                    return Ok(true);
                }
                catch (Exception ex)
                {
                    if (ex.GetType().FullName == "Microsoft.EntityFrameworkCore.DbUpdateConcurrencyException")
                    {
                        return NotFound();
                    }

                    return BadRequest();
                }
            }

            return BadRequest();
        }



        [HttpDelete]
        [Route("DeletePayment/{pmId}")]
        public async Task<IActionResult> DeletePayment(int? pmId)
        {
            int result = 0;

            if (pmId == null)
            {
                return BadRequest();
            }

            try
            {
                result = await _paymentRepository.DeletePaymentDetail(pmId);
                if (result == 0)
                {
                    return NotFound();
                }
                return Ok(true);
            }
            catch (Exception)
            {

                return BadRequest();
            }
        }







        // GET: api/PaymentDetail
        //[HttpGet]
        //public async Task<ActionResult<IEnumerable<PaymentDetail>>> GetPaymentDetails()
        //{

        //}

        //// GET: api/PaymentDetail/5
        //[HttpGet("{id}")]
        //public async Task<ActionResult<PaymentDetail>> GetPaymentDetail(int id)
        //{

        //}
    }
}
